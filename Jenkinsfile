pipeline {
    agent any

    environment {
        DOCKER_HUB_CREDENTIALS = credentials('Nishadarie')
    }

    stages {
        stage('SCM Checkout') {
            steps {
                retry(3) {
                    script {
                        echo "Cloning repository..."
                        git branch: 'main', url: 'https://github.com/Nishadarie/Devops-new.git'
                    }
                }
            }
        }
        stage('List Directory Contents') {
            steps {
                bat 'dir'
            }
        }
        stage('Run Docker Compose') {
            steps {
                bat 'docker-compose up -d --build'
            }
        }
        stage('Login to Docker Hub') {
            steps {
                withCredentials([string(credentialsId: 'Nishadarie', variable: 'dockerhubpw')]) {
                    script {
                        // Using --password-stdin for secure login and quoting the username
                        bat """
                        echo %dockerhubpw% | docker login -u "Nishadarie Bandara" --password-stdin
                        """
                    }
                }
            }
        }
        stage('Tag and Push Images to Docker Hub') {
            steps {
                script {
                    def images = ["backend", "frontend"]
                    def dockerHubRepos = ["nishadarie/backend-app", "nishadarie/frontend-app"]
                    def buildNumber = env.BUILD_NUMBER

                    images.eachWithIndex { image, index ->
                        def repo = dockerHubRepos[index]
                        bat "docker tag ${image}:latest ${repo}:${buildNumber}"
                        bat "docker tag ${image}:latest ${repo}:latest"
                        retry(3) {
                            bat "docker push ${repo}:${buildNumber}"
                        }
                        retry(3) {
                            bat "docker push ${repo}:latest"
                        }
                    }
                }
            }
        }
    }
    post {
        always {
            bat 'docker logout'
        }
    }
}

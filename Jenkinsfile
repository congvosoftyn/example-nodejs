pipeline {
    agent any

    environment {
        DOCKERHUB_CREDENTIALS=credentials('dockerhub')
    }
    stages {
        stage('gitclone') { 
            steps {
                git 'https://github.com/congvosoftyn/example-nodejs.git'
            }
        }

        stage('Build') {
            steps {
                sh 'docker build -t congvosoftyn/node-web-app:latest .'
            }
        }
        
        stage('Login') {
            steps {
                sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
            }
        }

        stage('Push') {
            steps {
                sh 'docker push congvosoftyn/node-web-app:latest'
            }
        }
    }

    post {
        always {
            sh 'docker logout'
        }
    }
}


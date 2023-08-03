pipeline {
    agent any

    options {
        buildDiscarder(logRotator(numToKeepStr:'5'))
    }

    enviroment {
        DOCKERHUB_CREDENTIALS = credentials('github')
    }

    stages {
        stage('Build') {
            steps {
                sh 'docker build -t congvosoftyn/node-web-app .'
            }
        }
        stage('Login') {
            steps {
                sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
            }
        }
        stage('Push') {
            steps {
                sh 'docker push congvosoftyn/node-web-app'
            }
        }
    }
    post {
        always {
            sh 'docker logout'
        }
    }
}
pipeline {
    agent any

    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhub')
    }

    stages {
        stage('gitclone') {
            steps {
                git 'https://github.com/congvosoftyn/example-nodejs.git'
            }
        }
        stage('Install Docker') {
            steps {
                sh 'RUN curl -fsSLO https://get.docker.com/builds/Linux/x86_64/docker-17.04.0-ce.tgz \
                    && tar xzvf docker-17.04.0-ce.tgz \
                    && mv docker/docker /usr/local/bin \
                    && rm -r docker docker-17.04.0-ce.tgz'
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
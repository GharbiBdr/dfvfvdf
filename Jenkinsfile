pipeline {
    agent none

    environment {
        CI = 'true'
    }
    stages {
        stage('Build') {
            agent {
                docker{
                    image 'gradle:6.8.3-jdk8-openj9'
                  
                }
            }
            steps {
                echo 'Building ....'
                sh 'npm install'
            }
        }
    }
    post{
        always {
            echo 'pipeline is complete..'
        }
        failure {
            echo 'add notification to slack and/or email' 
        }
    }
}

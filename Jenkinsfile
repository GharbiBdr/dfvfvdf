pipeline {
    agent none

    environment {
        CI = 'true'
    }
    stages {
        stage('Build') {
            agent {
                docker{
                    image 'gradle:6.8.3-jdk8'
                  
                }
            }
            steps {
                echo 'Building ....'
                sh 'cd android && chmod +x ./gradlew && ./gradlew assembleRelease'
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

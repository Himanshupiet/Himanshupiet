pipeline {
   environment {
        registryCredential = 'hades_nhslive'
        dockerImage = ''
        version="0.0.${BUILD_NUMBER}"
    }
 agent any

 stages {
 stage('Build Image') {
     steps {
                sh "docker build -t hades.decipherzone.com:5000/marraforni/frontend:latest ."
                sh "docker tag hades.decipherzone.com:5000/marraforni/frontend:latest hades.decipherzone.com:5000/marraforni/frontend:${version}"
            }
        }
        
        stage('Deploy to Hades') {
            steps {
                script {
                    docker.withRegistry('https://hades.decipherzone.com:5000', registryCredential) {
                        sh "docker push hades.decipherzone.com:5000/marraforni/frontend:latest"
                        sh "docker push hades.decipherzone.com:5000/marraforni/frontend:${version}"
                    }
                }
            }
        }
        
        stage("Remove image") {
            steps {
                sh "docker rmi -f hades.decipherzone.com:5000/marraforni/frontend:latest"
                sh "docker rmi -f hades.decipherzone.com:5000/marraforni/frontend:${version}"
            }
        }
        
    /*stage ('Deploy') {
            steps {
                
                build job: 'marraforni-frontend-deployment' ,propagate: true, wait: true,  parameters: [[$class: 'StringParameterValue', name: 'version', value: "${version}"]]
         }
    }*/
}

 post {
         success {
            slackSend channel: 'project-marra-forani', message: "Finished ${env.JOB_NAME} ${env.BUILD_NUMBER} (<${env.BUILD_URL}|Open>) - version : ${version}\nversion : ${version} is pushed to hades, you can update your docker-compose if you need to", tokenCredentialId: 'decipherzone-slack'
            build job: 'marraforni-frontend-deployment' ,propagate: false, wait: false,  parameters: [[$class: 'StringParameterValue', name: 'version', value: "${version}"]]
        }
        unstable {
            slackSend channel: 'project-marra-forani', message: "Unstable ${env.JOB_NAME} ${env.BUILD_NUMBER} (<${env.BUILD_URL}|Open>)", tokenCredentialId: 'decipherzone-slack'
        }
        failure {
            slackSend channel: 'project-marra-forani', message: "Failed ${env.JOB_NAME} ${env.BUILD_NUMBER} (<${env.BUILD_URL}|Open>)", tokenCredentialId: 'decipherzone-slack'
        }
        cleanup {
            cleanWs()
        }
    }

}


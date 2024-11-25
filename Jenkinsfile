pipeline {
    agent any
    stages {
        stage("Primera etapa build") {
            agent {
                docker {
                    image 'node:22-alpine'
                    reuseNode true
                }
            }
            stages {
                stage("Instalacion de dependencias") {
                    steps {
                        sh "npm i"
                    }
                }
                stage("Ejecución del build") {
                    steps {
                        sh "npm run build"
                    }
                }
            }
        }
    }
}
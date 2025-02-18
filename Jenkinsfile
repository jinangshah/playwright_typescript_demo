pipeline {
    agent any

    environment {
        REPO_URL = 'https://github.com/jinangshah/playwright_typescript_demo.git'
        NODE_VERSION = '18'  // Set your Node.js version if needed
    }

    stages {
        stage('Checkout Code') {
            steps {
                git REPO_URL
            }
        }

        stage('Setup Node.js') {
            steps {
                sh 'nvm install node && nvm use node'
                sh 'node -v' 
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                sh 'npx playwright install --with-deps'  
                sh 'npm run test'
            }
        }

        stage('Generate Report') {
            steps {
                sh 'npm run report' 
            }
        }

        stage('Archive Test Reports') {
            steps {
                archiveArtifacts artifacts: 'playwright-report/**', fingerprint: true
            }
        }
    }

    post {
        always {
            echo 'Playwright test execution completed.'
        }

        success {
            echo 'Tests passed successfully!'
        }

        failure {
            echo 'Some tests failed! Check reports for details.'
        }
    }
}

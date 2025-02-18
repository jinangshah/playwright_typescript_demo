pipeline {
    agent any

    environment {
        REPO_URL = 'https://github.com/your-repo/playwright_project.git'
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
                sh 'node -v || nvm install $NODE_VERSION'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                sh 'npx playwright install --with-deps'  // Ensures all Playwright dependencies are installed
                sh 'npm run test'  // Adjust based on your package.json script
            }
        }

        stage('Generate Report') {
            steps {
                sh 'npm run report'  // Generates Playwright test report
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
            echo '🎭 Playwright test execution completed.'
        }

        success {
            echo '✅ Tests passed successfully!'
        }

        failure {
            echo '❌ Some tests failed! Check reports for details.'
        }
    }
}

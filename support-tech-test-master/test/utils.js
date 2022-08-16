const date = new Date().toISOString();
const tags = ['tag1', 'tag2', 'tag3'];

const brokenCapabilities = {
    'browserName': 'googlechrome',
    'platformName': 'macOS 10.15',
    'browserVersion': 'latest',
    'sauce:options': {
        'name': 'Broken Google Search',
        'screenResolution': '1280x960',
        'build': process.env.GITLAB_CI ? `${process.env.CI_JOB_NAME}-${date}` : `support-tech-test-${date}`
    }
};

const workingCapabilities = {
    'browserName': 'googlechrome',
    'platformName': 'macOS 10.15',
    'browserVersion': 'latest',
    'sauce:options': {
        'name': 'Guinea-Pig Sauce',
        'screenResolution': '1280x960',
        'build': process.env.GITLAB_CI ? `${process.env.CI_JOB_NAME}-${date}` : `support-tech-test-${date}`,
        'tags': tags,
        'passed': 'true' // sets it as Passed but, everything is passed..
    }
};

exports.brokenCapabilities = brokenCapabilities
exports.workingCapabilities = workingCapabilities
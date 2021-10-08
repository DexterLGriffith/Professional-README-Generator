function generateReadMe(data){
    return `
    # ${data.title}

    ## Table of Contents 
    ### [Description](#Description)
    ### [Tasks Completed](#Tasks Completed)
    ### [Installation](#Installation)
    ### [Links](#Links)
    ### [Credits](#Credits)
    ### [References](#References)
    ### [License](#License)

    ## Description
    
    ${data.description}

    ## Tasks Completed

    1. ${data.taskstep1}

    2. ${data.taskstep2}

    3. ${data.taskstep3}

    ## Installation 

    ${data.installation}

    ## Links

    ${data.link}

    ## Credits 

    ${data.credits}

    ## References

    1. ${data.references1}

    2. ${data.references2}

    ## License 

    ${data.license}

    `
}
// export the readme module.
module.exports = generateReadMe
function generateReadMe(data){
    return `
    # ${data.title}

    -[Description](#Description)
    -[Tasks Completed](#Tasks Completed)
    -[Installation](#Installation)
    -[Credits](#Credits)
    -[References](#References)
    -[License](#License)

    ## Description
    
    ${data.description}

    ## Tasks Completed

    ${data.tasks}

    ## Installation 

    ${data.installation}

    ## Credits 

    ${data.credits}

    ## References

    ${data.references}

    ## License 

    ${data.license}

    `
}
// export the readme module.
module.exports = generateReadMe
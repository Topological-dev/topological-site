const setupDocsNav = docs => {
    const newDocs = {}
    docs.forEach( doc => {
        if (doc.category && doc.category !== ""){
            if(!Object.keys(newDocs).includes(doc.category))
                newDocs[doc.category] = []
            newDocs[doc.category].push(doc.page)
        }
        else{
            newDocs[doc.page] = []
            newDocs[doc.page][0] = doc.page
        }
    })

    return newDocs
}

export default setupDocsNav
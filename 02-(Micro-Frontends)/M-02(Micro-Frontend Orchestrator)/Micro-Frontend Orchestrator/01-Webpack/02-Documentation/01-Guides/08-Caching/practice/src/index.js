import Print from "./print"

async function getComponent(){
    const element = document.createElement('div') 

    const {default: _} = await import("lodash")
    element.innerHTML = _.join(['Hello webpcak', 'learning', 'caching'], ' ')
    element.onclick = Print.bind(null, 'Print function is invoked!!')

    return element;
}

getComponent()
.then((component) => {
    document.body.appendChild(component)
})
.catch((error) => {
    console.log(`There was some error while trying to get component ${error}`)
})
function recycle(array) {
    const filter = name =>{
        return array.filter(el=> el.material === name || el?.secondMaterial === name).map(el => el.type)
    }
    const output = [
        filter('paper'),
        filter('glass'),
        filter('organic'),
        filter('plastic'),
    ]
    return output
}

// recyclerMaterials.map(m => objects.filter(o => o.material == m || o.secondMaterial == m).map(o => o.type));
setTimeout(()=>{
    console.log("Timeout 10")
    let div = document.getElementById('root')
    div.innerHTML='<h1>10</h1>'
    setTimeout(()=>{
        console.log("Timeout 9")
        div.innerHTML='<h1>9</h1>'
        setTimeout(()=>{
            console.log("Timeout 8")
            div.innerHTML='<h1>8</h1>'
            setTimeout(()=>{
                console.log("Timeout 7")
                div.innerHTML='<h1>7</h1>'
                setTimeout(()=>{
                    console.log("Timeout 6")
                    div.innerHTML='<h1>6</h1>'
                    setTimeout(()=>{
                        console.log("Timeout 5")
                        div.innerHTML='<h1>5</h1>'
                        setTimeout(()=>{
                            console.log("Timeout 4")
                            div.innerHTML='<h1>4</h1>'
                            setTimeout(()=>{
                                console.log("Timeout 3")
                                div.innerHTML='<h1>3</h1>'
                                setTimeout(()=>{
                                    console.log("Timeout 2")
                                    div.innerHTML='<h1>2</h1>'
                                    setTimeout(()=>{
                                        console.log("Timeout 1")
                                        div.innerHTML='<h1>1</h1>'
                                        setTimeout(()=>{
                                         div.innerHTML='<h1>Happy Independence Day</h1>'
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)
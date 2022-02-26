window.onload=()=>{
    const 
    b = document.getElementsByTagName('body')[0],
    form = document.getElementsByClassName('form')[0],
    nav = document.getElementsByClassName('navbar')[0]
    
    //=======================================
    // home | dairy
    // let TargetName = "home"
    let TargetName = "dairy"
    // let TargetName = ("home","dairy")
    //=======================================
    const Target = document.getElementsByClassName(TargetName)[0]
    //=======================================

    b.classList.remove('passwordManager')
    form.classList.add('hide')
    nav.classList.remove('hide')
    Target.classList.remove('hide')
};

/*
    *
*/
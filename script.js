const expFun = () =>{
    let newNode = document.createElement("textarea");
    newNode.setAttribute('placeholder','Enter experience');
    newNode.classList.add('exp');
    let expIn = document.getElementById('expCont');
    let expBefore = document.getElementById('idExp');
    expIn.insertBefore(newNode,expBefore);
}
const eduFun = () =>{
    let newNode = document.createElement("textarea");
    newNode.setAttribute('placeholder','Enter education');
    newNode.classList.add('edu');
    let eduIn = document.getElementById('eduCont');
    let eduBefore = document.getElementById('idEdu');
    eduIn.insertBefore(newNode,eduBefore);
}
const proFun = () =>{
    let newNode = document.createElement("textarea");
    newNode.setAttribute('placeholder','Enter project');
    newNode.classList.add('pro');
    let proIn = document.getElementById('proCont');
    let proBefore = document.getElementById('idPro'); 
    proIn.insertBefore(newNode,proBefore);
}
const skillFun = () =>{
    let newNode = document.createElement("input");
    newNode.setAttribute('placeholder','Enter skill');
    newNode.classList.add('skills');
    let skillIn = document.getElementById('skillCont');
    let skillBefore = document.getElementById('idSkill');
    skillIn.insertBefore(newNode,skillBefore);
}
const change = () =>{
    document.getElementById('setName').innerHTML = document.getElementById('name').value;
    document.getElementById('setEmail').innerHTML = document.getElementById('email').value;
    document.getElementById('setPhone').innerHTML = document.getElementById('phone').value;
    document.getElementById('setGit').innerHTML = document.getElementById('git').value;
    document.getElementById('setLink').innerHTML = document.getElementById('link').value;
    let exp = document.getElementsByClassName('exp');
    let str = "";
    for(let e of exp){
        str = str + `<li> ${e.value} </li>`;
    }
    document.getElementById('setExp').innerHTML = str;
    let skill = document.getElementsByClassName('skills');
    let str2 = "";
    for(let e of skill){
        str2=str2 + `<li> ${e.value} </li>`;
    }
    document.getElementById('setSkill').innerHTML = str2;
    let edu = document.getElementsByClassName('edu');
    let str3 = "";
    for(let e of edu){
        str3 = str3 + `<li> ${e.value} </li>`;
    }
    document.getElementById('setEdu').innerHTML = str3;
    let pro = document.getElementsByClassName('pro');
    let str4 = "";
    for(let e of pro){
        str4 = str4 + `<li> ${e.value} </li>`;
    }
    document.getElementById('setPro').innerHTML = str4;
    let main = document.getElementById('main');
    let main2 = document.getElementById('main2');
    main.style = 'display:none';
    main2.style = 'display:block';
}
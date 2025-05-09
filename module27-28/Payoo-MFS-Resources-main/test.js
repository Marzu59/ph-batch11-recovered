document.getElementById('bd-btn').addEventListener('click', function (){
    document.getElementById('bd').style.display = 'block';
    document.getElementById('USA').style.display = 'none'
})

document.getElementById('usa-btn').addEventListener('click', function (){
    document.getElementById('USA').style.display = 'block';
    document.getElementById('bd').style.display = 'none'
})
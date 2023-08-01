document.querySelector('form[action="/create"]').addEventListener('submit', function(event) {
    let inputTask = document.querySelector('input[name="descricao_da_tarefa"]');
    
    if(inputTask.value.trim() === '') {
        inputTask.style.borderColor = "red";
        event.preventDefault();
        alert('Sem descricao eh complicado ne malucao');
    }
    else{
        inputTask.style.borderColor = '';
    }
});
const urlBase="https://tradi-locais-default-rtdb.firebaseio.com/";

function adicionar(){
    const nome =$('#nome').val();
    const idade=$('#email').val();
    const perfil=$('#mensagen').val();
  const dados= JSON.stringify({nome,idade,perfil})
  $.post(`${urlBase}.json`, dados,()=>{
    alert("dados adicionados com sucesso!")
    $('#nome').val("");
    $('#email').val("");
    $('#mensagen').val("");
    listar();
  });
}

function listar(){
    $.get(`${urlBase}.json`,data =>{
        $("#lista").html("");
        for(const id in data){
            const usuario= data[id];
            $("#lista").append(`
                <li class="list-group-item d-flex justify-content-between align-item-center">
                    <div>
                        <strong>${usuario.nome}</strong>-${usuario.email}
                    </div>  
                    <div>
                        <button class="btn btn-sm btn-warning me-2" onclick="editar('${id}', '${usuario.nome}', '${usuario.email}', '${usuario.mensagen}')">
                            editar
                        </button>
                        <button class="btn btn-sm btn-danger" onclick="excluir('${id}')">
                            excluir
                        </button>
                    </div>
                </li>
                `);
            }
        });
    
    }
    function adicionar2(){
        const perfil = document.getElementById('mensagen').value;
      const dados= JSON.stringify({mensagen})
      $.post(`${urlBase}.json`, dados,()=>{
        $('#mensagen').val("");
        listar2();
      });
    }

    function listar2(){
        $.get(`${urlBase}.json`,data =>{
            $("#lista").html("");
            for(const id in data){
                const usuario= data[id];
                $("#lista").append(`
                    <li class="list-group-item d-flex justify-content-between align-item-center">
                        <div>
                            <strong>${usuario.mensagen}</strong>-
                        </div>  
                        <div>
                            <button class="btn btn-sm btn-warning me-2" onclick="editar('${id}','${usuario.mensagen}')">
                                editar
                            </button>
                            <button class="btn btn-sm btn-danger" onclick="excluir('${id}')">
                                excluir
                            </button>
                        </div>
                    </li>
                    `);
                }
            });
        
        }
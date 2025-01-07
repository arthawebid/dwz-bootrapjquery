var NIM = "2401010714"
var urlAPI = "https://apimhstiki.ptov.my.id/"
var urlLIST = urlAPI+"/testi-"+NIM+"/read"
var urlDEL = `${urlAPI}/testi`

$(function(){
    listdata()
})

function listdata(){
    $.ajax({
        url: urlLIST,
        method: 'GET',
        DataType: 'json',
        success: function(dta){
            let tbl = ""
            let idx = 0
            if(dta.error == 4){
                dta.TESTI.forEach(function(isi){
                    tbl += `<tr>
                    <td>${isi.NAMA}</td>
                    <td>${isi.EMAIL}</td>
                    <td>${isi.TESTI}</td>
                    <td>${isi.IPX}</td>
                    <td><a onclick="destroy('${idx}')" class="btn btn-danger btn-sm"> Hapus </a></td>
                  </tr>`
                })
                $("tbody").html(tbl)
            }
        },
        error:function(){
            console.log("Gagal mengambil Data Testimoni")
        }
    })
}
function destroy(idx){
    alert("Hapus Data dengan id: "+idx)
}
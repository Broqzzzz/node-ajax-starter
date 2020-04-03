$(document).ready(function(){
    //Scripts
    
    
    function addStudentDiv(item, parentDiv){
            var rowDiv = document.createElement("div");
            var imgCol = document.createElement("div");
            var nameCol = document.createElement("div");
            
            var img =document.createElement("img");
            var nameHead = document.createElement("h4");
            var idNum = document.createElement("p");
            
            $(rowDiv).addClass("row student");
            $(imgCol).addClass("col-sm-2 center");
            $(nameCol).addClass("col-sm-10");
            
            $(img).attr("src",item.img);
            $(nameHead).text(item.name);
            $(idNum).text(item.id);
            
            imgCol.append(img);
            
            nameCol.append(nameHead);
            nameCol.append(idNum);
            
            rowDiv.append(imgCol);
            rowDiv.append(nameCol);
            
            parentDiv.append(rowDiv);
    }
    
    
    
    $.get('getStudents', function(data, status){
        var studentListCont = $("#studentList");
        
        /**
            <div class="row student">
                <div class="col-sm-2 center">
                    <img src="{{this.img}}"/>
                </div>
                <div class="col-sm-10">
                    <h4>{{cap this.name}}</h4>
                    <p>{{this.id}}</p>
                </div>
            </div>
        **/
        
        data.forEach((item,i) =>{
            addStudentDiv(item,studentListCont);
        });    
    });
    
    
    $("#addStudent").click(function(){
       
        var name = $("#name").val();
        var idnum = $("#idnum").val();
        var gender = $("input[name='gender']:checked").val();
        
        var newStudent = {
            name: name,
            id: idnum,
            gender: gender,
        };
        
        $.post('addStudent', newStudent,function(data,status){ 
            console.log(data);
            var studentListCont = $("#studentList");
            addStudentDiv(data, studentListCont);
        }); 
    });
});
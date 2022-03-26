$(document).ready(function(){
    // 영문소문자/숫자,4~16자 만족하면 true
    const idRegex = /^(?=.*[a-z])[a-z0-9]{4,16}$/;
    // 영문 대소문자/숫자, 4~16자
    const pwRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[A-Za-z0-9]{10,16}$/;
    // 이메일 @ 검사
    const mailRegex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    //공백 검사
    const empRegex = /[\s]/g;
    
    // 회원가입 유효성 검사
    function check(){
        // id입력이 안되었을 때
        if($('#uid').val()==""){
            $('#uid').focus();
            $('#idmsg').text("아이디를 입력해주세요.");
            return false;
        }

        //비밀번호 입력이 안되었을 때
        if($('#upw').val()==""){
            $('#upw').focus();
            $('#pwmsg').text("비밀번호를 입력해주세요.");
            return false;
        }

        //이름 입력이 안되었을 때
        if($('#uname').val()==""){
            $('#uname').focus();
            alert("이름 항목은 필수 입력값입니다.")
            return false;
        }

        //휴대전화 입력이 안되었을 때
        if($('#mobile1').val()=="" || $('#mobile2').val()==""){
            $('#mobile1').focus();
            alert("휴대전화는 필수 입력값입니다.")
            return false;
        }

        //이메일 입력이 안되었을 때
        if($('#umail').val()==""){
            $('#umail').focus();
            alert("이메일 항목은 필수 입력값입니다.")
            return false;
        }

        //공백이 있는지
        // 이름에 공백이 존재하면
        if(empRegex.test($('#uname').val())){
            $('#uname').focus();
            alert("이름 항목에 공백이 포함되어 있습니다.");
            return false;
        }

        var mobilelen1 = $('#mobile2').val().length;
        var mobilelen2 = $('#mobile3').val().length;
        // 전화번호가 각 4자리인지
        if(!(mobilelen1 == 4 && mobilelen2 == 4)){
            $('#mobile2').focus();
            alert("휴대전화 4자리를 정확하게 입력해주세요.")
            return false;
        }

        // 이메일 @ 유효성 검사
        if(!(mailRegex.test($('#umail').val()))){
            $('#umail').focus();
            alert('올바른 이메일 형식이 아닙니다.');
            return false;
        }

        // 아무 문제 없었으면
        alert("회원가입이 완료되었습니다.");
    }
    
    // 회원가입 버튼을 눌렀을 때
    $('#joinbtn').on("click",function(){
        check();
    });

    // focusout이 되었을 때 유효성 겁사
    $('#uid, #upw').on("focusout",function(){
        var uid = $('#uid').val();
        var upw = $('#upw').val();
        // id 조건에 만족하지 않으면
        if(!(uid=="") && !idRegex.test(uid)){
            $('#idmsg').text("아이디는 영문소문자 또는 영문소문자 숫자로 입력해주세요.");
            $('#idmsg').css('color','red');
        }
        // 아이디 유효성 검사 통과
        if(idRegex.test(uid)){
            $('#idmsg').text(`${uid}는 사용가능한 아이디입니다.`);
            $('#idmsg').css('color','blue');
        }

        // pw 조건에 만족하지 않으면
        if(!(upw=="") && !pwRegex.test(upw)){
            $('#pwmsg').text("비밀번호는 영문대소문자 숫자로 입력해주세요.");
        }
         // 비밀번호 유효성 검사 통과하면
         if(pwRegex.test(upw)){
            // console.log("통과");
            $('#pwmsg').empty();
        }
    });
});
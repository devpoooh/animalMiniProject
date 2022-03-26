$(document).ready(function(){
    // 로그인 유효성 및 값 attr
    $('.login-btn').click(function(evt){
        evt.preventDefault();
        // console.log(evt);
        let uidVal = $('.login-id').val(); //id값
        let upwVal = $('.login-pwd').val(); //pw값
        // console.log(upwVal);

        // id 값이 없으면
        if(uidVal===""){
            alert('아이디 항목은 필수 입력값입니다.');
        }else if(upwVal===""){
            alert('비밀번호 항목은 필수 입력값입니다.');
        }else{
            // 우선 무조건 로그인 성공
            // + db와 일치한 값만 해야겠지?
            alert('로그인 성공');
            // 로그인 성공 시 input칸 리셋
            $('.login-id').val('');
            $('.login-pwd').val('');
            // console.log(uidVal,upwVal);
        }
    });
    
});

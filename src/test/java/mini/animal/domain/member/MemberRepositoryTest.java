package mini.animal.domain.member;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

//저장이 잘 되는지 테스트
class MemberRepositoryTest  {

    //멤버리포지토리(메모리) 가져오기
    MemberRepository memberRepository = MemberRepository.getInstance();

    @AfterEach
    void afterEach(){
        memberRepository.clearStore();
    }

    @Test
    @DisplayName("저장이 잘되는지 확인")
    void save(){
        //given
        Member member = new Member("userid1","1234","kim","1234-1234","kim@naver.com");

        //when
        Member save = memberRepository.save(member);

        //then
        System.out.println("save = " + save);
        Assertions.assertThat(save.getUserid()).isEqualTo("userid1"); //정상적으로 저장됨
    }
}
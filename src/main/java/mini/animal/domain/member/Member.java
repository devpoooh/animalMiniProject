package mini.animal.domain.member;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class Member {
    private long id; //pk
    private String userid; //id
    private String userpw; //pw
    private String username; //name
    private String phonenum; //phonenumber
    private String email;//email

    public Member(String userid, String userpw, String username, String phonenum, String email) {
        this.userid = userid;
        this.userpw = userpw;
        this.username = username;
        this.phonenum = phonenum;
        this.email = email;
    }
}

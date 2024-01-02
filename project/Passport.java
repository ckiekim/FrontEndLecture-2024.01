package paperplease;

public class Passport {
	// 여권 클래스 
	
	String psName;
	int psAge;
	String psjob;
	String psNation;
	
	public Passport(String name , int age ,String national){
		// 불러올 값들 초기화
		psName = name;
		psAge = age;
		psNation = national;
	}
	
	String getCriPass(String pace, int age,String name){
		// 범죄자 서류면 +1 해서 다른값들을 파라미터로 넘겨받음
		String page  = 
				"            -------------------PASSPORT FACE---------------- \n"+
				pace +"\n"+
				"            -------------------------------------------------\n"+
				"                  ------------PASSPORT INFO-----------\n"+
				"                  @                                                         \n"+ 
				"                  @         이름 :   "+name+"                              \n"+ 
				"                  @         나이 :   "+age+"                                 \n"+ 
				"                  @         국적 :  "+psNation+"                             \n"+ 
				"                  @                                                         \n"+ 
				"                  -------------------------------------\n";
		
		return page;
	}
	
	String getPerPass(String pace) {
		// 범죄자가 아닌 사람의 서류면
		String page  = 
				"            -------------------PASSPORT FACE---------------- \n"+
				pace +"\n"+
				"            -------------------------------------------------\n"+
				"                  ------------PASSPORT INFO-----------\n"+
				"                  @                                                         \n"+ 
				"                  @         이름 :   "+psName+"                              \n"+ 
				"                  @         나이 :   "+psAge+"                               \n"+ 
				"                  @         국적 :  "+psNation+"                             \n"+ 
				"                  @                                                         \n"+ 
				"                  -------------------------------------\n";
		
		
		return page;
	}
	
	
}

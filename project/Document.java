package paperplease;


public class Document {
	
	
	// 정상인  --------------------
	String docName;
	String docNation;

	int docDate;
	
	int[] docInfoRandom = {
			(int)(Math.random()*4),			// 백신 종류		
			(int)(Math.random()*2),			// 백신 종류
			(int)(Math.random()*3 +2020),	// 백신 접종 날짜(연도)
	};
	
	// 감염자 ----------------------------
	
	String[] infNameArr = {"이자윤","박소정","김정만","손흥만","김태의",
			 "신송용","장해원","손가안","정수자","박승이",
			 "이상엽","박진양","정마라","김교빈","신승연"}; 
	String[] infNationArr = {" 중국 "," 러시아"," 베트남"," 영국 "};
	String[] infVaccineListArr1 = {"코로나18", "원숭이두창", "신종플루"};
	String[] infVaccineListArr2 = {"말라리아", "소아마비", "장티푸스"};
	int infDate;
	
	int[] infInfoRandom = {
			(int)(Math.random()*15),		// 이름
			(int)(Math.random()*4),			// 국적
			(int)(Math.random()*3),			// 백신 종류1	
			(int)(Math.random()*3),			// 백신 종류2
			(int)(Math.random()*11 +2009),	// 백신 접종 날짜(연도) : 2019년부터 X
	};
	
	
	
	// 정상인의 접종증명서
	public String showdocCer(String name , String national){
		
		String docName = name;			// 이름 불러오기
		String docNation = national;	// 국적 불러오기
		
		int docDate = docInfoRandom[2];	// 2020년 이후 발급
		
		String cer  =   "                   ______________________________________\n"
						+"                  |\t\t\t\t\t|\n"
						+"                  |\t\t백신 접종 증명서\t\t|\n"
						+"                  |\t\t\t\t\t|\n"
						+"                  |\t\t이름\t"+docName+"\t\t|\n"
						+"                  |\t\t\t\t\t|\n"
						+"                  |\t\t접종항목\t\t\t|\n"
						+"                  |\t\t부스트샷\t\t\t|\n"
						+"                  |\t\t코로나19\t\t\t|\n"
						+"                  |\t\t\t\t\t|\n"
						+"                  |\t\t"+ docDate +".xx.xx\t\t|\n"
						+"                  |\t\t" + docNation+ " 질병관리청\t\t|\n"
						+"                  |_____________________________________|\n"
						;
		
		return cer;
		
	}
	
	
	// 감염자의 접종 증명서 -------------------
	public String showinfCer(){
		String infName = infNameArr[infInfoRandom[0]];					// 감염자 이름 오타냈음
		String infNation = infNationArr[infInfoRandom[1]];				// 감염자 국가 : 중국 러시아 베트남 영국
		int infDate = infInfoRandom[4];									// 2020년 이전 발급
		String infVaccineList1 = infVaccineListArr1[infInfoRandom[2]];	// 코로나19, 부스트샷 제외 백신만 접종
		String infVaccineList2 = infVaccineListArr2[infInfoRandom[3]];
		
		
		
		String cer = "                   ______________________________________\n"
					+"                  |\t\t\t\t\t|\n"
					+"                  |\t\t백신 접종 증명서\t\t|\n"
					+"                  |\t\t\t\t\t|\n"
					+"                  |\t\t이름\t"+infName+"\t\t|\n"
					+"                  |\t\t\t\t\t|\n"
					+"                  |\t\t접종항목\t\t\t|\n"
					+"                  |\t\t"+infVaccineList1+"\t\t\t|\n"
					+"                  |\t\t"+infVaccineList2+"\t\t\t|\n"
					+"                  |\t\t\t\t\t|\n"
					+"                  |\t\t"+ infDate +".xx.xx\t\t|\n"
					+"                  |\t\t" + infNation+ " 질병관리청\t\t|\n"
					+"                  |_____________________________________|\n"
					;
	
		
		return cer;
		
	}
	

	
	
	
	
}
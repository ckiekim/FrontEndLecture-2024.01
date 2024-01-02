package paperplease;

public class Traveler {
	// 입국자 클래스 
	
	String tName; // 이름
	int tAge ; // 나이 
	String tNational; // 국적
	String tJob ; // 직업 ( 특성 )
	boolean tVirus ; // 바이러스 유무
	boolean tDoc ; // 서류 유무 
	boolean tPas ; // 여권 유무 
	String tFace ; 
	String offMaskFace ;
	String thansSpeak ;
	String slangSpeak ; 
	int faceNumber ;
	int nameNumber;
	int nationulNumber;
	
	String passport; // 여권
	String document; // 서류
	
	// 각 랜덤값의 정보 저장
	String[] name = {"이지윤","박수정","김정민","손흥민","김대의",
					 "신승용","장혜원","손가인","정수지","박승원",
					 "이승엽","박진영","정미리","김규빈","신승현"}; 
	
	String[] job = {"일반인","범죄자","여행객","마약밀수범","감염인"};
	
	String[] national1 = {"대한민국"," 미국 "," 호주 ","이탈리아"};
	String[] national2 = {" 중국 "," 러시아"," 배트남"," 영국 "};
	
	String[] thansSpeaks = {
			"복 받으실겁니다",
			"정말 감사합니다!",
			"수고하세요~",
			"감사합니다."
			};
	String[] slangSpeaks = {
			"말도안돼...",
			"후회하게 될거야",
			"그사람 참, 까다롭게 구는군",
			"지옥에나 떨어지쇼",
			"하...",
			"정말, 너무하는군"
	};
	
	public Traveler(){
		// 입국자 생성자 
		
		int[] trInfoRandom = {
				(int)(Math.random()*15),        // 이름         0
				(int)((Math.random()*55)+20),  	// 나이         1
				(int)(Math.random()*5),			// 직업(특징)    2
				(int)(Math.random()*2),			// 얼굴         3
				(int)(Math.random()*2),			// 감염 유무     4
				(int)(Math.random()*4),			// 감사의 말     5
				(int)(Math.random()*6),			// 불평의 말     6
				(int)(Math.random()*4)			// 국적         7
		};
		
		faceNumber = trInfoRandom[3];
		nameNumber = trInfoRandom[0];
		nationulNumber = trInfoRandom[7];
		
		names(trInfoRandom[0]);// 이름 설정
		tAge = trInfoRandom[1];// 나이 설정
		jobs(trInfoRandom[2]); // 직업 설정
		faces(trInfoRandom[3]);// 얼굴 설정
		tVirus = truFalse(trInfoRandom[4]); // 바이러스 유무
		thansSpeak = thansSpeaks[trInfoRandom[5]]; // 고마운 말
		slangSpeak = slangSpeaks[trInfoRandom[6]]; // 나쁜 말

		fixJob(); // 여권과 서류 유무 분류하기
		national(nationulNumber,tJob); // 직업별로 국가 분류하기
		getDocument();// 서류 받기
		getPassport(faceNumber); // 여권 받기
		
	}
	void fixJob() {
		if(tJob.equals("일반인") || tJob.equals("여행객")) {
			tDoc = true;
			tPas = true;
		}else if(tJob.equals("범죄자") ||tJob.equals("마약밀수범") ) {
			tDoc = true;
			tPas = true;
		}else {
			//감염인이면
			tDoc = false;
			tPas = true;
			tVirus = true;
		}
	}
	
	void names(int random) {
		tName = name[random];
	}
	
	void jobs(int random) {
		tJob = job[random];
	}
	
	boolean truFalse(int random) {
		if(random == 0) {
			return false;
		}else {
			return true;
		}
	}
	void getFace() {
		System.out.println("                           입국자 이름 : "+tName);
		System.out.println(tFace);
	}
	
	void faces(int num) {
			tFace = arrMOnFaces[num];
			offMaskFace = arrMOfFaces[num];
	}
	void tinfo() {
		System.out.println(tName);
		System.out.println(tAge);
		System.out.println(tJob);
		System.out.println(tVirus);
		System.out.println(tPas);
		System.out.println(tDoc);
	}
	
	void national(int num, String job ) {
		if(job.equals("범죄자") || job.equals("마약밀수범") || job.equals("감염인") ) {
			// 입국할 수 없는 나라
			tNational = national2[num];
		}else {
			// 입국할 수 있는 나라
			tNational = national1[num];
		}
		//System.out.println("나라는 : "+tNational);
	}
	
	void getPassport(int faceNum) {
		// 여권 불러오기
		Passport ps = new Passport(tName,tAge,tNational);
		if(tJob.equals("범죄자")||tJob.equals("마약밀수범")) {
			int num = nameNumber;
			if(faceNum == 0) {
				faceNum++;
			}else {
				faceNum--;
			}
			
			if(num == 0 ) {
				num++;
			}else{
				num--;
			}
			
			String face = arrMOfFaces[(faceNum)];
			int age = tAge+(int)(Math.random()*20);
			String pname = name[num];
			passport = ps.getCriPass(face,age,pname);
		}else {
			passport = ps.getPerPass(offMaskFace);
		}
	}
	void getDocument() {
		// 서류 불러오기 
		Document dc = new Document();
		if(tJob.equals("범죄자") || tJob.equals("마약밀수범") || tJob.equals("감염인") ) {
			// 비정상인이면
			document = dc.showinfCer();
			
		}else {
			// 정상인이면
			document = dc.showdocCer(tName,tNational);
		}
		
		
		
	}

	int questioning() {
		// 추궁하기 
		
		int random = (int)(Math.random()*2);
		switch(random) {
		case 0:
			// 추궁해도 여권이나 서류가 없을때
			break;
		case 1:
			// 추궁했을때 여권이나 서류가 생김
			tPas = true;
			getPassport(faceNumber);
			break;
		}
		
		if(tJob.equals("일반인") || tJob.equals("여행객")) {
			return 1;
		}
		
		return random;
	}
	
	void determining(int allPerson, int trNum) {
		// 일반인 수가 너무 작으면 안되니까 제어하는 함수 
		Document dc = new Document();
		if(trNum >= 5 && allPerson <= 8) {
			tJob = "일반인";
			national(nationulNumber,tJob);
			document = dc.showdocCer(tName,tNational);
			getPassport(faceNumber);
			fixJob();
		}
		
	}
	
	String[] arrMOfFaces = { 
						"          □□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□\n"+
						"          □□□□□□□□□□□□□□□□□□□□□□□■■□□□□□□□□□□□□□□□□□□□□□□□□□□□\n"+
						"          □□□□□□□□□□□□□□□□□□□□□■■■■■■□□□□□□□□□□□□□□□□□□□□□□□□□\n"+
						"          □□□□□□□□□□□□□□□□□□□□■■■■■■■■■□□□□□□□□□□□□□□□□□□□□□□□\n"+
						"          □□□□□□□□□□□□□□□□□□□□■□□□■■■■■■□□□□□□□□□□□□□□□□□□□□□□\n"+
						"          □□□□□□□□□□□□□□□□□□□■■□■■□■■■■□□□□□□□□□□□□□□□□□□□□□□□\n"+
						"          □□□□□□□□□□□□□□□□□□■□■□□■□□■■■□□□□□□□□□□□□□□□□□□□□□□□\n"+
						"          □□□□□□□□□□□□□□□□□□■□■□□□□■□■□□□□□□□□□□□□□□□□□□□□□□□□\n"+
						"          □□□□□□□□□□□□□□□□□□□■■■□□■■□■□□□□□□□□□□□□□□□□□□□□□□□□\n"+
						"          □□□□□□□□□□□□□□□□□□□□□■■■■■■■□□□□□□□□□□□□□□□□□□□□□□□□\n"+
						"          □□□□□□□□□□□□□□□□□□□□■■■■■■■■■□□□□□□□□□□□□□□□□□□□□□□□\n"+
						"          □□□□□□□□□□□□□□□□□□■■■■■■■■■■■■□□□□□□□□□□□□□□□□□□□□□□\n"+
						"          □□□□□□□□□□□□□□□□□■■■■■■■■■■■■■■□□□□□□□□□□□□□□□□□□□□□\n"+
						"          □□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□\n",
						
						"          □□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□\n"+
						"          □□□□□□□□□□□□□□□□□□□□□■■■■■□□□□□□□□□□□□□□□□□□□□□□□□□□\n"+
						"          □□□□□□□□□□□□□□□□□□□■■■■■■■■□□□□□□□□□□□□□□□□□□□□□□□□□\n"+
						"          □□□□□□□□□□□□□□□□□□■■■■■■■■■■□□□□□□□□□□□□□□□□□□□□□□□□\n"+
						"          □□□□□□□□□□□□□□□□□□■□■■■□■■■□■□□□□□□□□□□□□□□□□□□□□□□□\n"+
						"          □□□□□□□□□□□□□□□□□□■□□■□□□■□□■□□□□□□□□□□□□□□□□□□□□□□□\n"+
						"          □□□□□□□□□□□□□□□□□■■■□□□■□□□■■■□□□□□□□□□□□□□□□□□□□□□□\n"+
						"          □□□□□□□□□□□□□□□□□■■■■□■■■□■■■■□□□□□□□□□□□□□□□□□□□□□□\n"+
						"          □□□□□□□□□□□□□□□□■■■■■■□□□■■■■■■□□□□□□□□□□□□□□□□□□□□□\n"+
						"          □□□□□□□□□□□□□□□□□□□□□■■■■■□□□□□□□□□□□□□□□□□□□□□□□□□□\n"+
						"          □□□□□□□□□□□□□□□□□□□■■■■■■■■■□□□□□□□□□□□□□□□□□□□□□□□□\n"+
						"          □□□□□□□□□□□□□□□□□□■■■■■■■■■■■□□□□□□□□□□□□□□□□□□□□□□□\n"+
						"          □□□□□□□□□□□□□□□□□■■■■■■■■■■■■■□□□□□□□□□□□□□□□□□□□□□□\n"+
						"          □□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□\n"
			
	}; 
	String[] arrMOnFaces = {
						"          □□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□\n"+
						"          □□□□□□□□□□□□□□□□□□□□□□□■■□□□□□□□□□□□□□□□□□□□□□□□□□□□\n"+
						"          □□□□□□□□□□□□□□□□□□□□□■■■■■■□□□□□□□□□□□□□□□□□□□□□□□□□\n"+
						"          □□□□□□□□□□□□□□□□□□□□■■■■■■■■■□□□□□□□□□□□□□□□□□□□□□□□\n"+
						"          □□□□□□□□□□□□□□□□□□□□■□□□■■■■■■□□□□□□□□□□□□□□□□□□□□□□\n"+
						"          □□□□□□□□□□□□□□□□□□□■■□■■□■■■■□□□□□□□□□□□□□□□□□□□□□□□\n"+
						"          □□□□□□□□□□□□□□□□□□■□■□□■□□■■■□□□□□□□□□□□□□□□□□□□□□□□\n"+
						"          □□□□□□□□□□□□□□□□□□■□■■■■■■■■□□□□□□□□□□□□□□□□□□□□□□□□\n"+
						"          □□□□□□□□□□□□□□□□□□□■■□□□□□□■□□□□□□□□□□□□□□□□□□□□□□□□\n"+
						"          □□□□□□□□□□□□□□□□□□□□□■■■■■■■□□□□□□□□□□□□□□□□□□□□□□□□\n"+
						"          □□□□□□□□□□□□□□□□□□□□■■■■■■■■■□□□□□□□□□□□□□□□□□□□□□□□\n"+
						"          □□□□□□□□□□□□□□□□□□■■■■■■■■■■■■□□□□□□□□□□□□□□□□□□□□□□\n"+
						"          □□□□□□□□□□□□□□□□□■■■■■■■■■■■■■■□□□□□□□□□□□□□□□□□□□□□\n"+
						"          □□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□\n",
						
						"          □□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□\n"+
						"          □□□□□□□□□□□□□□□□□□□□□■■■■■□□□□□□□□□□□□□□□□□□□□□□□□□□\n"+
						"          □□□□□□□□□□□□□□□□□□□■■■■■■■■□□□□□□□□□□□□□□□□□□□□□□□□□\n"+
						"          □□□□□□□□□□□□□□□□□□■■■■■■■■■■□□□□□□□□□□□□□□□□□□□□□□□□\n"+
						"          □□□□□□□□□□□□□□□□□□■□■■■□■■■□■□□□□□□□□□□□□□□□□□□□□□□□\n"+
						"          □□□□□□□□□□□□□□□□□□■□□■□□□■□□■□□□□□□□□□□□□□□□□□□□□□□□\n"+
						"          □□□□□□□□□□□□□□□□□■■■■■■■■■■■■■□□□□□□□□□□□□□□□□□□□□□□\n"+
						"          □□□□□□□□□□□□□□□□□■■■□□□□□□□■■■□□□□□□□□□□□□□□□□□□□□□□\n"+
						"          □□□□□□□□□□□□□□□□■■■■■■□□□■■■■■■□□□□□□□□□□□□□□□□□□□□□\n"+
						"          □□□□□□□□□□□□□□□□□□□□■■■■■■■□□□□□□□□□□□□□□□□□□□□□□□□□\n"+
						"          □□□□□□□□□□□□□□□□□□□■■■■■■■■■□□□□□□□□□□□□□□□□□□□□□□□□\n"+
						"          □□□□□□□□□□□□□□□□□□■■■■■■■■■■■□□□□□□□□□□□□□□□□□□□□□□□\n"+
						"          □□□□□□□□□□□□□□□□□■■■■■■■■■■■■■□□□□□□□□□□□□□□□□□□□□□□\n"+
						"          □□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□\n"
	}; 
	
}

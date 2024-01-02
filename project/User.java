package paperplease;

public class User {
	int score = 0;
	int passCriminal = 0; // 통과시킨 범죄자 수
	int passInfected = 0; // 통과시킨 감염자 수
	int passPerson = 0; // 통과시킨 일반인 수
	
	int allCriminal = 0 ;
	int allInfected = 0 ; 
	int allPerson = 0;
	
	int[] getEnding = {0,0,0,0};
	
	void readingPerson(boolean myDC, String tvrJob) {
		// 이 사람의 정보와 내가 내린 결정을 비교해서 점수 결정;
		pluseAll(tvrJob);
		
		if(myDC == true && (tvrJob.equals("일반인") || tvrJob.equals("여행객")) ) {
			// 통과시킨사람이 일반인이거나 여행객이면 
			passPerson++;
			score += 10;
		}else if(myDC == true && (tvrJob.equals("범죄자") || tvrJob.equals("마약밀수범"))){
			// 통과시킨사람이 범죄자 이거나 마약밀수범이면
			passCriminal++;
			score -= 10;
		}else if(myDC == true && tvrJob.equals("감염인")){
			// 통과시킨사람이 감염인이면
			passInfected++;
			score -= 10;
		}
		//getUserInfo();   // 확인용 정보
	}
	
	void gameRestart() {
		// 엔딩 정보를 제외하고 초기화
		score = 0;
		passCriminal = 0; 
		passInfected = 0; 
		passPerson = 0; 
		
		allCriminal = 0 ;
		allInfected = 0 ; 
		allPerson = 0;
	}
	
	void getUserInfo() {
		System.out.println("점수:"+score);
		System.out.println("통과범죄자:"+passCriminal);
		System.out.println("통과감염자:"+passInfected);
		System.out.println("통과일반인:"+passPerson);
		System.out.println("전체범죄자:"+allCriminal);
		System.out.println("전체감염자:"+allInfected);
		System.out.println("전체일반인:"+allPerson);
	}
	
	void pluseAll(String tvrJob) {
		switch(tvrJob) {
		case "일반인": allPerson++;    break;
		case "여행객": allPerson++;    break;
		case "범죄자": allCriminal++;    break;
		case "마약밀수범": allCriminal++;    break;
		case "감염인": allInfected++;    break;
		}
	}
	
	 void getScore(Story story,int trNum) {
		int[] scores = {trNum,score,passCriminal,passInfected,passPerson,
						allPerson,allCriminal,allInfected};
		story.printScore(scores); // story에 점수 출력 불러옴
	}
	 
	 void activation(int endNum) {
		 // 유저가 달성한 앤딩 추가시키는 함수 
		 
		 switch(endNum) {
		 case 1: // 거북이
			 getEnding[0] = 1;
			 break;
		 case 2: // 흐린눈
			 getEnding[1] = 1;
			 break;
		 case 3: // 침식된 도시
			 getEnding[2] = 1;
			 break;
		 case 4: // 평화로운 도시
			 getEnding[3] = 1;
			 break;
		 
		 }
	 }
}

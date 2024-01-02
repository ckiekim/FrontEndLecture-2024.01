package paperplease;

import java.util.Scanner;

public class MainPlay {

	public static void main(String[] args) {
		User user = new User();
		Ending end = new Ending();
		int trNum = 0; // 총입국자수

		// 게임 시작
	Loop0: while (true) { // 게임 자체의 첫 반복문

			Scanner scanner = new Scanner(System.in);
			Story story = new Story();

			story.gameStart();
			String sNum = scanner.nextLine();
			if (sNum.equals("1")) {
				// 게임 시작 입력

				story.story(); // 메인 스토리 설명
				scanner.nextLine(); // 앤터 치면 다음으로 넘어가게
				
				story.rule();
				story.getEnterText();
				scanner.nextLine();
				
				Loop1: while (true) {                                          // Loof1 > 각각의 입국자 생성
					if(trNum == 15) {
						
						// 생성된 입국자들이 15명 이면
						// 클리어 화면
						// 점수 화면
						int criminal = user.passCriminal;
						int infected = user.passInfected;
						int score = user.score;
						
						
						user.getScore(story,trNum); // 점수 출력
						story.getEnterText();
						scanner.nextLine();
						
						int endNum = end.getEnding(criminal,infected,score); // 엔딩 출력
						story.getEnterText();
						scanner.nextLine();
						
						// 사용자 엔딩 개방하기 
						user.activation(endNum);
						
						if(endNum == 4) {
							// 해피 앤딩이면
							story.gameClear();
							story.getEnterText();
							scanner.nextLine();
							
						}else {
							// 아니면
							story.gameOver();
							story.getEnterText();
							scanner.nextLine();
						}
						
						// 메인 변수들 초기화 함수 적용
						trNum = 0 ;
						user.gameRestart();
						continue Loop0;
						
					}
					
					Traveler travr = new Traveler(); // 입국자 정보가 생성되는 곳
					String detailNum;
					trNum++; // 입국자 총갯수;
					travr.determining(user.allPerson,trNum);  // 일반인 제어
					int event1 = (int)(Math.random()*2);
					int event2 = (int)(Math.random()*2);
					int qst = travr.questioning();
					int qst2 = travr.questioning();

					Loop2: while (true) {                                      // Loof2 > 입국자 질문
						
						travr.getFace(); // 입국자의 얼굴 불러오기
						story.gamePage();
						sNum = scanner.nextLine();

						switch (sNum) {
						case "1": // 여권 확인
							Loop3: while (true) {
								if (event1 == 1) {
									System.out.println(travr.passport);
									story.getPassport(true);
									detailNum = scanner.nextLine();
									
									// 여권이 있으면
									switch (detailNum) {
									case "1": // 얼굴 확인하기
										System.out.println(travr.offMaskFace);
										story.getFaceText();
										scanner.nextLine();
										continue Loop3;
									case "2": // 뒤로가기
										continue Loop2;
									default:
										System.out.println(travr.passport);
										story.inputError();
										scanner.nextLine();
										continue Loop3;
									}
								} else {
									travr.getFace();
									System.out.println(story.getNoPass());
									story.getPassport(false);
									detailNum = scanner.nextLine();
									// 여권이 없으면
									switch (detailNum) {
									case "1": // 추궁하기
										// 여권 제출하지 않으셨습니다.
										if(qst == 1) {
											// 여권이 있는경우
											// 여권 보여주고
											event1 = 1;
											System.out.println(travr.passport);
											story.questioning(qst, travr.tName);
											story.getEnterText();
										}else {
											// 여권이 없는경우
											travr.getFace();
											story.questioning(qst, travr.tName);
											story.getEnterText();
										}
										scanner.nextLine();
										continue Loop2;
									case "2": // 뒤로가기
										continue Loop2;
									default:
										travr.getFace();
										story.inputError();
										scanner.nextLine();
										continue Loop3;
									}
								}
							}
						case "2": // 서류 확인---------------------------------------------------------
							Loop3: while (true) {
								if (event2 == 1) {
									//서류를 제출 한 경우
									// 서류를 출력한다
									System.out.println(travr.document);
									story.backPage();
									detailNum = scanner.nextLine();
									
									continue Loop2;
									
								} else {
									// 서류 제출을 안했으면
									travr.getFace();
									System.out.println(story.getNoDoc());
									story.getPassport(false);
									detailNum = scanner.nextLine();
									switch (detailNum) {
									case "1": // 추궁하기
										// 서류를 제출하지 않으셨습니다.
										if(qst2 == 1) {
											// 서류가 있는경우
											// 서류 보여주고
											event2 = 1;
											System.out.println(travr.document);
											story.questioning(qst2, travr.tName); 
											story.backPage();
										}else {
											// 서류가 없는경우
											travr.getFace();
											story.questioning(qst2, travr.tName); 
											story.backPage();
										}
										scanner.nextLine();
										continue Loop2;
									case "2": // 뒤로가기
										continue Loop2;
									default:
										travr.getFace();
										story.inputError();
										scanner.nextLine();
										continue Loop3;
									}
								}
							}//------------------------------------------------------------------------
						case "3": // 결정하기
							travr.getFace();
							story.getDecid();
							detailNum = scanner.nextLine();
							switch (detailNum) {
							case "1": // 추방하기
								user.readingPerson(false,travr.tJob);
								travr.getFace();
								// 입국자 추방 메세지 띄우기
								story.tvrThankSpeak(travr.tName,travr.slangSpeak);
								story.getEnterText();
								scanner.nextLine();
								continue Loop1;
							case "2": // 입국시키기
								user.readingPerson(true,travr.tJob);
								travr.getFace();
								// 입국자 입국 메세지 띄우기
								story.tvrThankSpeak(travr.tName,travr.thansSpeak);
								story.getEnterText();
								scanner.nextLine();
								continue Loop1;
							default:
								travr.getFace();
								story.inputError();
								scanner.nextLine();
								continue Loop2;
							}
						case "4": // 방칙확인
							// 맞는 서류, 통과시켜도 되는 항목 리스트
							story.rule();
							story.backPage();
							scanner.nextLine();
							continue Loop2;
						default:
							travr.getFace();
							story.inputError();
							scanner.nextLine();
							continue Loop2;
						}
					}
				} // Loop 1 끝 
			} else if (sNum.equals("2")) {
				// 게임 종료 입력
				// 종료 메세지 출력
				story.endGame();
				break;
			} else if (sNum.equals("3")) {
				// 엔딩 목록 출력
				end.endingList(user.getEnding);
				story.backPage();
				scanner.nextLine();
				// 뒤로가기
			}

		}
	}
}
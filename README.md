이용했던 깃 명령어 정리:

1. 리모트 레포지토리에 연결 할 때
	git remote add origin "url"

2. 현재 수정 된 파일의 유무와 스테이징 유무를 열람때
	git remote status

3. 현재수정내용들을 모두 스테이징 시킬 때
	git add .

4. 현재 수정 내용들의 세이브 포인트/커밋을 할 때
	git commite -m "메세지"

5. 현재 수정 내용들을 리모트 레포의 마스터로 업로드 할 때
	git push origin master

6. 새로운 브랜치를 생성 할 때 (브렌치명: feature/README)
	git branch feature/README

7. feature/README 브렌치로 이동을 할 때
	git checkout feature/README

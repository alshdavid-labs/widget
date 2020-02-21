default: clean build

clean:
	rm -r -f dist

build:
	weeb pack \
		--in gui \
		--out dist \
		--prod
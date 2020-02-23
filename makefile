default: clean build

clean:
	rm -r -f dist

build:
	weeb pack \
		--in cmd/frame \
		--out dist \
		--prod

watch:
	weeb pack \
		--in cmd/frame \
		--out dist \
		--watch

stats:
	weeb pack \
		--in cmd/frame \
		--out dist \
		--stats
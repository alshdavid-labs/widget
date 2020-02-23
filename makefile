default: clean build

clean:
	rm -r -f dist

build:
	weeb pack \
		--in cmd/frame \
		--out dist \
		--prod
	cd dist && gzip -r -k .

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
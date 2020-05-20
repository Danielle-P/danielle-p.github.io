# To run commands in terminal, type make then command name (e.g. make serve)
serve:
	bundle exec jekyll serve

build:
	bundle exec jekyll build

kill-existing:
	lsof -i tcp:4000
	echo "Now run 'kill PID' using the PID shown above"

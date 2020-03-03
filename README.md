# Custom Behavior Lambda
1) Dockerfile accepts 2 environment variables to specify the build path and file
	1. $DIR: the build path relative to root directory
	2. $FILE: the target file to build
	3. Docker gives us lots of environment variables by default, such as GIT_MSG. We can join the 2 arguments above with special character and split them in hooks/build script.
2) Hooks is used to run custom commands between phases of the build process by creating hooks. Hooks allow you to provide extra instructions to the autobuild and autotest processes.The following hooks are available:
	1. hooks/post_checkout
	2. hooks/pre_build
	3. hooks/post_build
	4. hooks/pre_test
	5. hooks/post_test
	6. hooks/pre_push (only used when executing a build rule or automated build )
	7. hooks/post_push (only used when executing a build rule or automated build )
3) A hooks/build file overrides the basic docker build command used by the builder, so we must include a similar build command in the hook or the automated build fails.
	1. e.g. docker build -t $IMAGE_NAME --build-arg SOURCE_COMMIT=$GIT_MSG
4) sample shows a Hello World application and required files for a docker image
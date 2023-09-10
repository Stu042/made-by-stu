import React from "react";
import {Footer} from "../../Components/footer";
import Title from "../../Components/Title/title";
import {CodeBlock} from "../../Components/code-block";
import "./HelloWorld.css"

class HelloWorld extends React.Component {
    componentDidMount() {
        document.title = "How to Host a Simple Website";
    }

    render() {
        return (
            <>
                <Title title={"Simplest(?) OpenGL Program"}
                       breadcrumbs={[{uiName: "Main Page", link: "/"}, {uiName: "OpenGL Tutorials", link: "/OpenGL"}]}/>
                <p>This does look like a lot of code and to be fair it is. Not only is it using C, which can be a bit
                    wordy, but with the addition of SDL and OpenGL the code quickly inflates.</p>
                <p>There is a lot of good news, first being this is one big function, this is far from ideal way to code
                    with C or SDL or even OpenGL. So take the code here with a pinch of salt, it is laid out this way to
                    make it easier to explain the reason for each line, not for ease of editing and maintaining - that
                    will come later/soon.</p>
                <p>Can't handle a lot of Ctrl+C and Ctrl+V then, this code can be downloaded at <a
                    href={"https://github.com/Stu042/OpenGL-HelloWorld"}
                    target="_blank"
                    rel="noreferrer">GitHub</a>. </p>
                <h3>and There Was Code</h3>
                <div className={"info"}>
                    <p>As usual with C, we start with the includes</p>
                    <ul>
                        <li>stdio gives us printf, etc</li>
                        <li>stdbool is a weird C thing in that you can't use the type bool without it</li>
                        <li>SDL allows us to create a window and have some control over it - very useful</li>
                        <li>and lastly glew give us access to the OpenGL functions that your graphics driver already has
                        </li>
                    </ul>
                </div>
                <CodeBlock codeString={
                    "#include <stdio.h>\n" +
                    "#include <stdbool.h>\n" +
                    "#include <SDL.h>\n" +
                    "#include <GL/glew.h>"}/>
                <p className={"info"}>I am indulging a little here, but it is nicer to collect variables together and these structs will
                    hold some information that will make life easier for us.</p>
                <CodeBlock codeString={
                    "typedef struct {\n" +
                    "\tSDL_Window *window;\n" +
                    "\tSDL_GLContext context;\n" +
                    "} OpenGlEnvironment;\n" +
                    "\n" +
                    "// definition of a new window\n" +
                    "typedef struct {\n" +
                    "\tint width;\n" +
                    "\tint height;\n" +
                    "\tconst char *title;\n" +
                    "} NewWindow;\n"
                }/>
                <p className={"info"}>Constants, we create the definition of what a new window will look like, but we also have two quite
                    large interesting looking strings - we will explain them more later on.</p>
                <CodeBlock codeString={
                    "const NewWindow windowDef = {\n" +
                    "\t  800,\n" +
                    "\t  600,\n" +
                    "\t  \"Hello World\"\n" +
                    "};\n" +
                    "\n" +
                    "const char *shaderFrag = \"#version 410\\n\"\n" +
                    "                         \"out vec4 o_frag_colour;\\n\"\n" +
                    "                         \"void main() {\\n\"\n" +
                    "                         \"    o_frag_colour = vec4( 0.0, 0.5, 0.75, 1.0 );\\n\"\n" +
                    "                         \"}\";\n" +
                    "\n" +
                    "const char *shaderVert = \"#version 410\\n\"\n" +
                    "                         \"in vec3 a_vertex_position;\\n\"\n" +
                    "                         \"void main() {\\n\"\n" +
                    "                         \"    gl_Position = vec4( a_vertex_position, 1.0 );\\n\"\n" +
                    "                         \"}\";"
                }/>
                <p className={"info"}>If your a C coder this is familiar, if not best to learn C or C++ before continuing, but this is just
                    the definition of program entry, the main function.</p>
                <CodeBlock codeString={
                    "int main(int argc, char *argv[]) {"
                }/>
                <p className={"info"}>This section is initialising SDL, just a btw we will be wanting to use SDL_INIT_VIDEO soon,
                    SDL_Init() returns 0 if it is successful, so we are also checking for an error if it fails.
                    SDL_GetError() will return a string of the last error generated by SDL.</p>
                <CodeBlock codeString={
                    "\tif (SDL_Init(SDL_INIT_VIDEO) < 0) {\n" +
                    "\t\tprintf(\"Error: Unable to initialise SDL. SDL Error: %s\\n\", SDL_GetError());\n" +
                    "\t\treturn 1;\n" +
                    "\t}"
                }/>
                <p className={"info"}>The SDL_GL_ functions are ways of asking SDL to pass on a message to OpenGL, here we are asking to
                    use OpenGL version 4.1 (Major version.Minor version) - of course we are curious about errors so more
                    SDL_GetError(). BTW SDL_GL_CONTEXT_PROFILE_CORE is just asking for an OpenGL with no deprecated
                    functionality, so what I would consider a standard OpenGL context to use.</p>
                <CodeBlock codeString={
                    "\tint error = SDL_GL_SetAttribute(SDL_GL_CONTEXT_MAJOR_VERSION, 4);\n" +
                    "\tif (error != 0) {\n" +
                    "\t\tprintf(\"Error: with SDL_GL_CONTEXT_MAJOR_VERSION, %s\\n\", SDL_GetError());\n" +
                    "\t}\n" +
                    "\terror = SDL_GL_SetAttribute(SDL_GL_CONTEXT_MINOR_VERSION, 1);\n" +
                    "\tif (error != 0) {\n" +
                    "\t\tprintf(\"Error: with SDL_GL_CONTEXT_MINOR_VERSION, %s\\n\", SDL_GetError());\n" +
                    "\t}\n" +
                    "\terror = SDL_GL_SetAttribute(SDL_GL_CONTEXT_FLAGS, SDL_GL_CONTEXT_PROFILE_CORE);\n" +
                    "\tif (error != 0) {\n" +
                    "\t\tprintf(\"Error: with SDL_GL_CONTEXT_FLAGS, %s\\n\", SDL_GetError());\n" +
                    "\t}"

                }/>
                <p className={"info"}>Woohoo, something actually happens here, this line-ish opens a window for us. If you were to stop
                    here you would end up with a blank window, so best to carry on.</p>
                <CodeBlock codeString={
                    "\tSDL_Window *window = SDL_CreateWindow(windowDef.title, SDL_WINDOWPOS_CENTERED, SDL_WINDOWPOS_CENTERED,\n" +
                    "\t                                      windowDef.width, windowDef.height,\n" +
                    "\t                                      SDL_WINDOW_OPENGL | SDL_WINDOW_SHOWN | SDL_WINDOW_RESIZABLE);"
                }/>
                <p className={"info"}>Error checking, did that window actually open?</p>
                <CodeBlock codeString={
                    "\tif (window == NULL) {\n" +
                    "\t\tprintf(\"Error: Window could not be created! SDL Error: %s\\n\", SDL_GetError());\n" +
                    "\t\treturn 2;\n" +
                    "\t}"
                }/>
                <p className={"info"}>Create our OpenGL context - our access to the OpenGL functionality.</p>
                <CodeBlock codeString={
                    "\tSDL_GLContext context = SDL_GL_CreateContext(window);\n" +
                    "\tif (context == NULL) {\n" +
                    "\t\tprintf(\"Error: OpenGL context could not be created! SDL Error: %s\\n\", SDL_GetError());\n" +
                    "\t\treturn 3;\n" +
                    "\t}"
                }/>
                <p className={"info"}>OpenGL libraries usually only provide functions up to version 3, glew will allow us to get access to
                    the
                    functions that version 4 provides, here is how we do that.</p>
                <CodeBlock codeString={
                    "\tglewExperimental = GL_TRUE;\n" +
                    "\tGLenum glewError = glewInit();\n" +
                    "\tif (glewError != GLEW_OK) {\n" +
                    "\t\tprintf(\"Error: initialising GLEW! %s\\n\", glewGetErrorString(glewError));\n" +
                    "\t\treturn 4;\n" +
                    "\t}"
                }/>
                <p className={"info"}>Now we are starting to get into the nitty gritty of OpenGL. OpenGL works best if you provide it lots
                    of number in one go and then tell it what to do with them. Here we are create an array of points and
                    prepare OpenGL to use them.</p>
                <CodeBlock codeString={
                    "\t// geometry to display\n" +
                    "\tGLuint triangleVao;   // mesh/attribute descriptor handle\n" +
                    "\tGLuint triangleVbo;   // handle to OpenGL copy of buffer\n" +
                    "\tfloat points[] = {0.0f, 0.5f, 0.0f, 0.5f, -0.5f, 0.0f, -0.5f, -0.5f, 0.0f};\n" +
                    "\tglGenVertexArrays(1, &triangleVao);\n" +
                    "\tglGenBuffers(1, &triangleVbo);"
                }/>
                <p className={"info"}>Okay this is getting to the point now, the glBind... functions tell OpenGL we are using these items.
                    So here we are using Vertex Array and a Buffer, we attach the points[] to both of these.
                    glBufferData() tells OpenGL the buffer is 9 floats long and GL_STATIC_DRAW advises this can go
                    directly into GPU memory as they wont be changing much - preferably not at all, changing values in
                    GPU memory is a slow process.</p>
                <CodeBlock codeString={
                    "\tglBindVertexArray(triangleVao);\n" +
                    "\tglBindBuffer(GL_ARRAY_BUFFER, triangleVbo);\n" +
                    "\tglBufferData(GL_ARRAY_BUFFER, 9 * sizeof(float), points, GL_STATIC_DRAW);\n"
                }/>
                <div className={"info"}>
                    <p className={"info"}>glEnableVertexAttribArray() names this Vertex Attribute Array (vao for short), so we can reuse it in
                        the near future.
                        glVertexAttribPointer() defines the attributes for Vertex Attribute Array 0 will return, i.e.</p>
                    <ul>
                        <li>0 - we start at index 0 in the buffer</li>
                        <li>3 - each attribute has 3 components - in our case a x, y and z coordinate</li>
                        <li>GL_FLOAT - each component is a float</li>
                        <li>GL_FALSE - should OpenGL normalise these values</li>
                        <li>0 - the space between the components we are using - this is useful to combine normals or
                            colours with coordinates in the same buffer. This is can be a very efficient way to use OpenGL
                        </li>
                        <li>NULL - an offset to where we start to read components, this is in measured bytes</li>
                    </ul>
                </div>
                <p>glBindBuffer() then binds the buffer (Vector Buffer Object - vbo) to a type of array and
                    glBindVertexArray() binds it all together in the vao.</p>
                <CodeBlock codeString={
                    "\tglEnableVertexAttribArray(0);\n" +
                    "\tglVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 0, NULL);\n" +
                    "\tglBindBuffer(GL_ARRAY_BUFFER, 0);\n" +
                    "\tglBindVertexArray(0);"
                }/>
                <div className={"info"}>
                    <p>Okay that is the shape sorted, now how will it look, time for shaders.
                        Well almost as firstly we are creating a vertex shader and a vertex shaders job is to define where
                        we draw the points on screen.</p>
                    <p>glCreateShader() returns an number to name this shader, then glShaderSource() provides the glsl files
                        for this shader. glCompileShader() compiles these and the rest is just error checking.</p>
                </div>
                <CodeBlock codeString={
                    "\t// build shaders\n" +
                    "\tGLuint vertexShaderHandle = glCreateShader(GL_VERTEX_SHADER);\n" +
                    "\tglShaderSource(vertexShaderHandle, 1, &shaderVert, NULL);\n" +
                    "\tglCompileShader(vertexShaderHandle);\n" +
                    "\tint params = -1;\n" +
                    "\tglGetShaderiv(vertexShaderHandle, GL_COMPILE_STATUS, &params);\n" +
                    "\tif (params != GL_TRUE) {\n" +
                    "\t\tprintf(\"Error: vertex shader %u did not compile\\n\", vertexShaderHandle);\n" +
                    "\t\tconst int maxLength = 2048;\n" +
                    "\t\tchar slog[maxLength];\n" +
                    "\t\tint actualLength = 0;\n" +
                    "\t\tglGetShaderInfoLog(vertexShaderHandle, maxLength, &actualLength, slog);\n" +
                    "\t\tprintf(\"Shader info log for GL index %u:\\n%s\\n\", vertexShaderHandle, slog);\n" +
                    "\t\tglDeleteShader(vertexShaderHandle);\n" +
                    "\t\treturn 6;\n" +
                    "\t}"
                }/>
                <p className={"info"}>Now pretty much the same for the fragment shader - the fragment shader defines how the pixels will look
                in this case just a solid colour.</p>
                <CodeBlock codeString={
                    "\tGLuint fragmentShaderHandle = glCreateShader(GL_FRAGMENT_SHADER);\n" +
                    "\tglShaderSource(fragmentShaderHandle, 1, &shaderFrag, NULL);\n" +
                    "\tglCompileShader(fragmentShaderHandle);\n" +
                    "\tparams = -1;\n" +
                    "\tglGetShaderiv(fragmentShaderHandle, GL_COMPILE_STATUS, &params);\n" +
                    "\tif (params != GL_TRUE) {\n" +
                    "\t\tprintf(\"Error: fragment shader %u did not compile\\n\", fragmentShaderHandle);\n" +
                    "\t\tconst int maxLength = 2048;\n" +
                    "\t\tchar shaderInfoLog[maxLength];\n" +
                    "\t\tint actualLength = 0;\n" +
                    "\t\tglGetShaderInfoLog(fragmentShaderHandle, maxLength, &actualLength, shaderInfoLog);\n" +
                    "\t\tprintf(\"Shader info log for GL index %u:\\n%s\\n\", fragmentShaderHandle, shaderInfoLog);\n" +
                    "\t\tglDeleteShader(vertexShaderHandle);\n" +
                    "\t\tglDeleteShader(fragmentShaderHandle);\n" +
                    "\t\treturn 8;\n" +
                    "\t}"
                }/>
                <p className={"info"}>Time to make one shader program out of the individual shaders. We create the program with glCreateProgram()
                    and using glAttachShader() tell it the vertex and fragment shaders that will amke up the program. Then link
                    it with glLinkProgram() and gain the rest is error checking.</p>
                <CodeBlock codeString={
                    "\t// link shaders into a shader program\n" +
                    "\tGLuint shaderProgram = glCreateProgram();\n" +
                    "\tglAttachShader(shaderProgram, fragmentShaderHandle);\n" +
                    "\tglAttachShader(shaderProgram, vertexShaderHandle);\n" +
                    "\tglLinkProgram(shaderProgram);\n" +
                    "\tparams = -1;\n" +
                    "\tglGetProgramiv(shaderProgram, GL_LINK_STATUS, &params);\n" +
                    "\tif (params != GL_TRUE) {\n" +
                    "\t\tprintf(\"Error: could not link shader program GL index %u\\n\", shaderProgram);\n" +
                    "\t\tconst int maxLength = 2048;\n" +
                    "\t\tchar programInfoLog[maxLength];\n" +
                    "\t\tint actualLength = 0;\n" +
                    "\t\tglGetProgramInfoLog(shaderProgram, maxLength, &actualLength, programInfoLog);\n" +
                    "\t\tprintf(\"Program info log for GL index %u:\\n%s\\n\", shaderProgram, programInfoLog);\n" +
                    "\t\tglDeleteProgram(shaderProgram);\n" +
                    "\t\tSDL_GL_DeleteContext(context);\n" +
                    "\t\tSDL_DestroyWindow(window);\n" +
                    "\t\tSDL_Quit();\n" +
                    "\t\treturn 10;\n" +
                    "\t}\n"
                }/>
                <p className={"info"}>Now we are about ready to draw something, it's been a long journey to get here but the preparation above
                    means the drawing will be quick and easy. Firstly though a little bit of SDL.
                    Whilst appIsRunning is true the loop will continue and we poll SDL events to check for the close button
                    on the window being clicked. glClearColor() sets the colour we will use to delete the window between renders,
                    i.e. the background colour.</p>
                <CodeBlock codeString={
                    "\t// start render loop\n" +
                    "\tglClearColor(0.0f, 0.0f, 0.0f, 0.0f);\n" +
                    "\tbool appIsRunning = true;\n" +
                    "\twhile (appIsRunning) {\n" +
                    "\t\t// check for sdl events (only quit so far)\n" +
                    "\t\tSDL_Event event;\n" +
                    "\t\tif (SDL_PollEvent(&event)) {\n" +
                    "\t\t\tif (event.type == SDL_QUIT) {\n" +
                    "\t\t\t\tappIsRunning = false;\n" +
                    "\t\t\t}\n" +
                    "\t\t}"
                }/>
                <p className={"info"}>and now the actual rendering, glClear() sets the display buffer to </p>
                <CodeBlock codeString={
                    "\t\t// opengl render\n" +
                    "\t\tglClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);\n" +
                    "\t\tglUseProgram(shaderProgram);\n" +
                    "\t\tglBindVertexArray(triangleVao);\n" +
                    "\t\tglDrawArrays(GL_TRIANGLES, 0, 3);\n" +
                    "\t\tglBindVertexArray(0);\n" +
                    "\t\tglUseProgram(0);"
                }/>
                <p className={"info"}></p>
                <CodeBlock codeString={
                    "        // tell sdl to show the rendered buffer\n" +
                    "        SDL_GL_SwapWindow(window);\n" +
                    "        SDL_Delay(0);\n" +
                    "    }"
                }/>

                <p className={"info"}></p>
                <CodeBlock codeString={
                    "    // app has been flagged to stop, so tidy before we finish\n" +
                    "    glDeleteShader(vertexShaderHandle);\n" +
                    "    glDeleteShader(fragmentShaderHandle);\n" +
                    "    glDeleteProgram(shaderProgram);\n" +
                    "    SDL_GL_DeleteContext(context);\n" +
                    "    SDL_DestroyWindow(window);\n" +
                    "    SDL_Quit();\n" +
                    "    return 0;\n" +
                    "}\n"
                }/>


                <Footer/>
            </>
        );
    }
}


export default HelloWorld;
#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

void main(){
    float x=gl_FragCoord.x/u_resolution.x;
    vec3 color=vec3(step(.5,x));
    gl_FragColor=vec4(color,1.);
}

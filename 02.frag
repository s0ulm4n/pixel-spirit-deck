#ifdef GL_ES
precision mediump float;
#endif

const float PI=3.14159;

uniform vec2 u_resolution;

void main(){
    vec2 pos=gl_FragCoord.xy/u_resolution;
    
    float color=step(.5+cos(pos.y*PI)*.25,pos.x);
    
    gl_FragColor=vec4(vec3(color),1.);
}

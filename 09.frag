#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

const float PI=3.14159;

float circleSDF(vec2 st){
    return length(st-.5)*2.;
}

void main(){
    vec2 pos=gl_FragCoord.xy/u_resolution;
    
    float color=step(circleSDF(pos),.65);
    vec2 offset=vec2(.1,.05);
    color-=step(circleSDF(pos-offset),.5);
    
    gl_FragColor=vec4(vec3(color),1.);
}

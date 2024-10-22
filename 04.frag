#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

float stroke(float x,float start,float width){
    float d=step(start,x+width/2.)-step(start,x-width/2.);
    return clamp(d,0.,1.);
}

void main(){
    vec2 pos=gl_FragCoord.xy/u_resolution;
    
    float color=stroke(pos.x,.5,.15);
    // float color=step(abs(.5-pos.x),.1);
    
    gl_FragColor=vec4(vec3(color),1.);
}

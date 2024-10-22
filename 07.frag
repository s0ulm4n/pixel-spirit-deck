#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

const float PI=3.14159;

float stroke(float x,float start,float width){
    float d=step(start,x+width/2.)-step(start,x-width/2.);
    return clamp(d,0.,1.);
}

void main(){
    vec2 pos=gl_FragCoord.xy/u_resolution;
    
    float color=stroke(.5+(pos.x-pos.y)*.5,.5,.1);
    color+=stroke((pos.x+pos.y)*.5,.5,.1);
    
    gl_FragColor=vec4(vec3(color),1.);
}

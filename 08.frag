#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

const float PI=3.14159;

float stroke(float x,float start,float width){
    float d=step(start,x+width/2.)-step(start,x-width/2.);
    return clamp(d,0.,1.);
}

float circleSDF(vec2 center,float r){
    return length(center-r)*2.;
}

float evenCircleSDF(vec2 center){
    vec2 newCenter=center-.5;
    newCenter.x=newCenter.x*(u_resolution.x/u_resolution.y);
    newCenter.y=newCenter.y*(u_resolution.x/u_resolution.y);
    return length(newCenter);
}

void main(){
    vec2 pos=gl_FragCoord.xy/u_resolution;
    
    // This shape doesn't look circular because it
    // DEPENDS ON THE RESOLUTION OF THE CANVAS
    float color=stroke(circleSDF(pos,.5),.5,.05);
    
    gl_FragColor=vec4(vec3(color),1.);
}

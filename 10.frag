#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

const float PI=3.14159;

float stroke(float x,float start,float width){
    float d=step(start,x+width/2.)-step(start,x-width/2.);
    return clamp(d,0.,1.);
}

float fill(float x,float size){
    return 1.-step(size,x);
}

float rectSDF(vec2 start,vec2 size){
    // Move the beginning of the coordinates to the center
    // of the canvas
    vec2 newStart=start*2.-1.;
    return max(abs(newStart.x/size.x),abs(newStart.y/size.y));
}

void main(){
    vec2 pos=gl_FragCoord.xy/u_resolution;
    
    float rect=rectSDF(pos,vec2(1.));
    float color=stroke(rect,.5,.125);
    // color+=fill(rect,.1);
    color+=step(rect,.1);
    
    gl_FragColor=vec4(vec3(color),1.);
}

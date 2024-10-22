#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

void main(){
    vec2 pos=gl_FragCoord.xy/u_resolution;
    
    float color=step(1.-pos.x,pos.y);
    // color=step(.5,(pos.x+pos.y)*.5);
    
    gl_FragColor=vec4(vec3(color),1.);
}

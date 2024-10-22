const float PI=3.14159;

// Create an outline of a shape.
// Returns 0.0 when the value if x is within
// [start - width / 2; start + width / 2]
float stroke(float x,float start,float width){
    float d=step(start,x+width/2.)-step(start,x-width/2.);
    return clamp(d,0.,1.);
}

// I don't understand the point of this function,
// this is essentially just the same as using step.
float fill(float x,float size){
    return 1.-step(size,x);
}

// Using the depth field to draw an ellipse
// (or circle, depending on the resolution)
float circleSDF(vec2 st){
    return length(st-.5)*2.;
}

// Using the depth of field to draw a rectangle
float rectSDF(vec2 start,vec2 size){
    vec2 newStart=start*2.-1.;
    return max(abs(start.x/size.x),abs(start.y/size.y));
}

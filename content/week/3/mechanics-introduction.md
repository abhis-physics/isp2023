---
title: Mechanics Introduction
lastmod: 2023-07-02T08:36:36-07:00
draft: false
description: Mechanics Introduction UPSC Physics Optional
---

### Introduction

1. Cartesian Coordinate System
2. Plane Polar Coordinate System
3. Spherical Polar Coordinate System
4. Laws of motion
5. Momentum

## Cartesian Coordinate System

![cartesian coordinate system](../assets/cartesian.svg)

## Plane Polar Coordinate System

![plane polar coordinate system](../assets/plane-polar.svg)

### unit vectors

$\vec{r} = x \ \hat{i} + y \ \hat{j} = r cosθ \ \hat{i} + r sinθ \ \hat{j} $

$$\tag{1}  \hat{r} = \frac{\vec{r}}{r} = cosθ \ \hat{i} + sinθ \ \hat{j} $$

The unit vector $\hat{θ}$ is perpendicular to $\hat{r}$, thus from increasing $θ \to θ+\frac{π}{2}$ we get $\vec{θ}$,

$\hat{θ} = cos(θ+\frac{π}{2}) \ \hat{i} + sin(θ+\frac{π}{2}) \ \hat{j} $

$$\tag{2} \hat{θ} = - sinθ \ \hat{i} + cosθ\ \hat{j}$$

using eqn(1), $\newline \frac{d \hat{r}}{dθ} = -sinθ \ \hat{i} + cosθ \ \hat{j} = \hat{θ}$

using eqn(2), $\newline \frac{d \hat{θ}}{dθ} = -cosθ \ \hat{i} - sinθ \ \hat{j} = - \hat{r}$

### finding velcity v and acceleration a

velocity, $\vec{v}$ is given by $\vec{v} = \frac{d\vec{r}}{dt}$

$ = \frac{d(r.\hat{r})}{dt} = \hat{r}\frac{dr}{dt} + r \frac{d \hat{r}}{dt}$

$ = \hat{r}\frac{dr}{dt} + r \frac{d \hat{r}}{dθ}\frac{dθ}{dt}$

$ = \hat{r}\dot{r} + r \hat{θ}\dot{θ}$

similary, for acceleration, $\vec{a} = \frac{d \vec{v}}{dt}$

$ = (\ddot{r} - r\dot{θ}^2)\hat{r} + (r\ddot{θ}+2\dot{r}\dot{θ})\hat{θ}$

## Spherical Polar Coordinate System

![spherical polar coordinate system](../assets/spherical-polar-coordinates.svg)

$\vec{r}$ is the **radial vector**, $θ$ is the **co-latitude** and $ϕ$ is the **azimuthal angle**.

$$
\begin{matrix}
x = r sinθ cosϕ && r = \sqrt{(x^2 + y^2 + z^2)} \\\\ \\\\
y = r sinθ sinϕ && θ = tan^{-1}[\frac{\sqrt{(x^2 + y^2 )}}{z}] \\\\ \\\\
z = r cosθ && ϕ = tan^{-1}(\frac{y}{x})
\end{matrix}
$$

$\vec{r} = rsinθcosϕ \ \hat{i} + rsinθsinϕ \ \hat{j} + rcosθ \ \hat{k}$

$\hat{r} = sinθcosϕ \ \hat{i} + sinθsinϕ \ \hat{j} + cosθ \ \hat{k}$

$\hat{θ} = cosθcosϕ \ \hat{i} + cosθsinϕ \ \hat{j} - sinθ \ \hat{k}$

$\hat{ϕ} = -sinϕ \ \hat{i} + cosϕ \ \hat{j} $

line element, $d\vec{l} = dr \ \hat{r} + rdθ \ \hat{θ} + rsinθdϕ \ \hat{ϕ}$

volume element, $d\vec{τ} = r^2sinθ \ drdθdϕ$

## Laws of motion

1. **First Law**: Everybody continues to be in its state of rest or of uniform motion in a striaght line unless acted upon by some external forces
2. **Second Law**: Rate of change of momentum is force applied.
$\newline F_{external} = \frac{d \vec{p}}{dt} = m \frac{d \vec{v}}{dt} = m \ddot{\vec{r}}$
3. **Third Law**: For every action there is equal and opposite reaction.

## Momentum

Suppose there are $j$ number of particles in a system. Hence on any particle there could exists two forces: internal and external.

So, $\vec{f_j} = f_j^{internal} + f_j^{external}$

$\implies \frac{d\vec{p_j}}{dt} = f_j^{internal} + f_j^{external}$

but, sum of internal forces will be zero, thus
$\sum \frac{d\vec{p_j}}{dt} = \sum f_j^{external}$

$\implies f_{external} = \frac{dp}{dt}$

Hence, total external force applied is equal to the rate of change of momentum of the system.

### Centre of Mass

Let there are $i$ particles in a system and mass of each particle is $m_i$ and are at a distance of $r_i$ from the centre of the system. Then the mass of the system $M$ and $\vec{R}$ is the position vector of the system,

$M\vec{R} = \sum m_i \vec{r_i}$

In an isolated system, the external force is zero, thus the momentum will be constant and the centre of mass will move with uniform velocity. Also position of centre of mass with respect to itself is zero.

### Conservation of momentum

When external force is zero the rate of change of momentum will be also zero, that means the momentum is conserved.

### Momentum and Flow of mass

We are taking a case of a Rocket moving in space under different circumstances:

#### Rocket in free space

A rocket is moving at a velocity $\vec{v}$ at time $t$ and in additional time $Δt$ rocket eject mass $Δm$ with relative velocity $\vec{u}$ with respect to the rocket and velocity of rocket changes to $\vec{v} + Δ\vec{v}$

Initial momentum $\vec{P_i}$ is given by,

$\vec{P_i} = \vec{P(t)} = (M+Δm) \vec{v} $

Final momentum $\vec{P_f}$ is given by,

$\vec{P_f} = \vec{P(t+Δt)} = M(\vec{v}+\vec{Δv}) + Δm(\vec{v}+\vec{Δv}+\vec{u})$

Change in momentum, $\vec{P_f} - \vec{P_i}$

$= \vec{P(t+Δt)} - \vec{P(t)}$

$= M(\vec{v}+\vec{Δv}) + Δm(\vec{v}+\vec{Δv}+\vec{u}) - (M+Δm) \vec{v}$

$= M\vec{Δv} + Δm\vec{u}$

Rate of change of momentum, $\lim\limits_{Δt \to 0} \frac{ΔP}{Δt}$

$\frac{d\vec{P}}{dt} = M \frac{d\vec{v}}{dt} + \vec{u} \frac{dm}{dt}$

$\implies \frac{d\vec{P}}{dt} = M \frac{d\vec{v}}{dt} - \vec{u} \frac{du}{dt}$

as $\frac{dm}{dt} = -\frac{du}{dt}$

But for rocket in free space $\frac{d\vec{P}}{dt} = 0$,

Hence, $M \frac{d\vec{v}}{dt} = \vec{u} \frac{du}{dt}$

$\implies \frac{d\vec{v}}{dt} = \frac{\vec{u}}{M} \frac{du}{dt}$

$\implies \frac{d\vec{v}}{dt} \ dt = \frac{\vec{u}}{M} \frac{du}{dt} \ dt$

on intergrating from $t_i \to t_f$, we have,

$\int_{t_i}^{t_{f}} \frac{d\vec{v}}{dt} \ dt = \int_{u_i}^{u_{f}} \frac{\vec{u}}{M} \frac{du}{dt} \ dt$

$\implies v_f - v_i = \vec{u} ln \frac{u_f}{u_i}$

$\implies v_f  = \vec{u} \ ln \frac{u_f}{u_i}$, when $v_i = 0$

Note that the final velocity depends on exhaust velcity, initial and final masses.

#### Rocket hit with dust stream

The rocket moving with uniform velocity $v$ was hit by a dust stream $\frac{dm}{dt}$, the dust stream has a velocity of $u$ before hiting the rocket. And the rocket was moving with the uniform velcity at any time $t$ with mass $M$.

$\vec{P(t)} = M(t)\vec{v} + Δm\vec{u}$

$\vec{P(t+Δt)} = (M(t)+Δm)\vec{v}$

Force is the rate of change of momentum, 

$\vec{F} = \frac{d\vec{P}}{dt} = \lim\limits_{Δt \to 0} \frac{\vec{P}(t+Δt) - \vec{P(t)}}{dt}$

$= \lim\limits_{Δt \to 0} \frac{(M(t)+Δm)\vec{v} - M(t)\vec{v} + Δm\vec{u}}{Δt}$

$= \lim\limits_{Δt \to 0} (\frac{Δm\vec{v}}{Δt} - \frac{Δm\vec{u}}{Δt})$

$= v\frac{vdm}{dt} - u\frac{dm}{dt}$

$\implies \vec{F} = (v-u)\frac{dm}{dt}$

#### Rocket in gravitational field

In a gravitaional field the rocket will experience a force $\vec{F} = M\vec{g}$

so, $\vec{F} = M \frac{d\vec{v}}{dt} - \vec{u}\frac{du}{dt}$

$M\vec{g} = M \frac{d\vec{v}}{dt} - \vec{u}\frac{du}{dt}$

$\implies d\vec{v} = \vec{g}dt + \vec{u} \frac{dM}{M}$

on intergrating we get,

$\vec{v_f} - \vec{v_i} = \vec{g}(t_f - t_i) + \vec{u} ln\frac{M_f}{M_i}$

so, for $v_i = 0$ at $t_i =0$,

$\vec{v_f} = \vec{g}(t_f) + \vec{u} ln\frac{M_f}{M_i}$

Note that shorter the fuel burning time, greater the rocket final velocity.

### Energy

#### Work-energy theorem

The work done in moving a particle from  $1$ to $2$ is given by the line integral,

$W_{12} = \int_1^2 \vec{F} ⋅ d\vec{r}$

$\int \vec{F} ⋅ d\vec{r}$ is also called path integral of the force and work integral.

In a simple harmonic oscillator, some work is done to bring a body from $a$ to $b$, i.e, $F(x)$.

The equation of SHM is given by $F(x) = m \frac{dv}{dt}$

On intergrating we get,

$\int_a^b F(x) dx = \int_a^b m \frac{dv}{dt} dx$

using $dx = v \ dt$

$\int_a^b F(x) dx = \int_a^b m \frac{dv}{dt} v \ dt $

$= m [\frac{v^2}{2}]_a^b$

$\implies \int_{X_a}^{X_b} F(x) dx = \frac{1}{2}mv_b^2 - \frac{1}{2}mv_a^2$

$\implies K.E_b - K.E_a = W_{ba}$

this is the work-energy theorem

#### Escape velocity

A particle is thrown from $R_e$ to $r$, so that the particle will be escaped from the earth gravity. So the force here is the gravitaional force. So we get,

$F = - \frac{GMm}{r^2}$

using work-energy theorem, $K.E(r) - K.E(R_e) = F(r).dr$

$\frac{1}{2}m(v(r))^2 - \frac{1}{2}m(v(R_e))^2 = - GMm \int_{R_e}^r \frac{dr}{r^2}$

upon reaching maximum height $v(r)=0$ and the let $v(R_e) = v_0$ and $r=r_{max}$

$\implies -\frac{1}{2}m(v_0)^2 = GMm[\frac{1}{r} - \frac{1}{R_e}]$

$\implies v_0^2 = 2GM[\frac{1}{R_e} - \frac{1}{r_{max}}]$

using $g = \frac{GM}{R_e^2}$

$r_{max} = \frac{R_e}{1-\frac{v_0^2}{2gR_e}}$

And to escape the gravitational pull, $r_{max} = ∞$

thus, $1-\frac{v_0^2}{2gR_e} = 0$

$\implies v_{escape} = \sqrt{2gR_e}$

#### Conservative Forces

Forces which are independent of their path is known as conservative forces and the force can be calculated used the end point data only. 

##### Feature of conservative forces

1. In a closed curve the total force will be zero. $\oint \vec{F}  ⋅ d\vec{r} = 0$
2. Using stoke's theorem, $\oint \vec{F} ⋅ d\vec{r} = \int_S (\vec{\nabla} \times \vec{F}) ⋅ d\vec{S} = 0$, thus curl of a conservative force in the force field is zero. i.e, $\vec{\nabla} \times \vec{F} = 0$

#### Potential energy

We introduce a concept called potential which will be the a function of position only. Potential energy is given by,

$\vec{F} = - \vec{\nabla}V(\vec{r})$

Thus the work done in moving a particle from $1 \to 2$ can be written as,

$W_{12} = \int_1^2 \vec{F} ⋅ d\vec{r} = - \int_1^2 \vec{\nabla}V ⋅ d(\vec{r})$

$= - \int_1^2 (\frac{∂V}{∂x}dx + \frac{∂V}{∂y}dy + \frac{∂V}{∂z}dz)$

$= - \int_1^2 dV = V_2 - V_1$

Thus, for a conservative system the work done by the force on moving a particle from $1 \to 2$ is the difference of the potential of particle at the postition $1$ and $2$

Also the total energy of the system is conserved as it is independent of the position.
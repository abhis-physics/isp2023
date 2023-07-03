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

### Conservation of momentum

When external force is zero the rate of change of momentum will be also zero, that means the momentum is conserved.


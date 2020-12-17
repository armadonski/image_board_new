<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Ramsey\Uuid\UuidInterface;

/**
 * @ORM\Entity(repositoryClass="App\Repository\VoteRepository")
 */
class Vote
{
    /**
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @ORM\Column(name="post_uuid", type="uuid")
     * @ORM\ManyToMany(targetEntity="App\Entity\Post", inversedBy="uuid")
     */
    private $postUuid;

    /**
     * @ORM\Column(name="likes", type="integer")
     */
    private $likes;

    /**
     * @ORM\Column(type="integer")
     * @ORM\ManyToOne(targetEntity="App\Entity\User", inversedBy="id")
     */
    private $user;

    public function getId(): int
    {
        return $this->id;
    }

    public function setId(int $id): self
    {
        $this->id = $id;

        return $this;

    }

    public function getPostUuid(): UuidInterface
    {
        return $this->postUuid;
    }

    public function setPostUuid(UuidInterface $postUuid): self
    {
        $this->postUuid = $postUuid;

        return $this;

    }

    public function getLikes(): int
    {
        return $this->likes;
    }

    public function setLikes(int $likes): self
    {
        $this->likes = $likes;

        return $this;
    }

    public function setUser(int $user): self
    {
        $this->user = $user;

        return $this;
    }

    public function getUser(): int
    {
        return $this->user;
    }
}

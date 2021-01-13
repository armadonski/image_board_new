<?php

namespace App\Entity;

use App\Model\ModelInterface;
use DateTime;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass="App\Repository\CommentRepository")
 * @ORM\Table(name="comment")
 */
class Comment implements ModelInterface
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="integer", nullable=false)
     * @ORM\ManyToOne(targetEntity="Post", inversedBy="id")
     */
    private $post;

    /**
     * @ORM\Column(name="user_id", type="integer", nullable=false)
     * @ORM\ManyToOne(targetEntity="App\Entity\User", inversedBy="id")
     */
    private $user;

    /**
     * @ORM\Column(type="string", nullable=false)
     * @Assert\NotBlank(message="You should type something if you would like to comment")
     * @Assert\Length(max="140", maxMessage="You can type this much.", min="2", minMessage="You should at least say hi.")
     */
    private $content;

    /**
     * @ORM\Column(type="integer", nullable=true)
     * @ORM\ManyToOne(targetEntity="App\Entity\Comment", inversedBy="id")
     */
    private $parentComment;

    /**
     * @ORM\Column(type="datetime", nullable=false)
     */
    private $created;

    public function getId(): int
    {
        return $this->id;
    }

    public function setId(int $id): self
    {
        $this->id = $id;

        return $this;
    }

    public function getPost(): int
    {
        return $this->post;
    }

    public function setPost(int $post): self
    {
        $this->post = $post;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getUser(): int
    {
        return $this->user;
    }

    public function setUser(int $user): self
    {
        $this->user = $user;

        return $this;
    }

    public function getContent(): string
    {
        return $this->content;
    }

    public function setContent(?string $content): self
    {
        $this->content = trim($content);

        return $this;
    }

    public function getParentComment(): int
    {
        return $this->parentComment;
    }

    public function setParentComment(int $parentComment): self
    {
        $this->parentComment = $parentComment;

        return $this;
    }

    public function getCreated(): DateTime
    {
        return $this->created;
    }

    public function setCreated(): self
    {
        $this->created = new DateTime();

        return $this;
    }

    public function serialize(): array
    {
        return [
            'content' => $this->content,
            'created' => $this->created
        ];
    }

}